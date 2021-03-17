import bp from 'body-parser'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import { RegisterControllers, Paths, RegisterSocketHandlers } from '../Setup'
import { logger } from './utils/Logger'
import { clientId, clientSecret } from './SpotifyAuth'
const axios = require('axios')
const Qs = require('qs')
let token = "";
export default class Startup {
  static ConfigureGlobalMiddleware(app) {
    // NOTE Configure and Register Middleware
    const whitelist = ['http://localhost:8080']
    const corsOptions = {
      origin: function(origin, callback) {
        const originIsWhitelisted = whitelist.indexOf(origin) !== -1
        callback(null, originIsWhitelisted)
      },
      credentials: true
    }
    app.use(helmet({
      contentSecurityPolicy: false
    }))
    app.use(cors(corsOptions))
    app.use(bp.json({ limit: '50mb' }))
  }

  static ConfigureRoutes(app) {
    const router = express.Router()
    RegisterControllers(router)
    RegisterSocketHandlers()
    app.use(router)

    app.use('', express.static(Paths.Public))
    Startup.registerErrorHandlers(app)
  }

  static registerErrorHandlers(app) {
    // NOTE SEND JSON 404 for any unknown routes
    app.use('/api', (_, res, next) => {
      res.status(404).send({ status: 404, message: 'Not Found' })
    })

    // NOTE SEND HTML 404 for any unknown routes
    app.use(
      '*',
      (_, res, next) => {
        res.status(404)
        next()
      },
      express.static(Paths.Public + '404')
    )
    // NOTE Default Error Handler
    app.use((error, req, res, next) => {
      if (!error.status) {
        error.status = 400
      }
      if (error.status === 500) {
        logger.error(error)
      }
      res.status(error.status).send({ error: { message: error.toString(), status: error.status }, url: req.url })
    })
  }

  static GetToken()
  {
    return token;
  }

  static SpotifyAuth()
  {
    const headers = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      auth: {
        username: clientId,
        password: clientSecret,
      },
    };
    const data = {
      grant_type: 'client_credentials',
    };
    
    // @ts-ignore
      const resp = axios.post(
        'https://accounts.spotify.com/api/token',
    
        // @ts-ignore
        Qs.stringify(data),
        headers
      ).then(function(response){                               
      token = response.data.access_token;
      
  });        
  }
  
}