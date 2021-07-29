import { rest } from "msw";

export const handlers = [

    rest.get('/test/endpoint', (req, res, ctx) => {

      return res(
          ctx.status(200),
          ctx.json({
             message: `Test endpoint is working!`
          })
      )
    })
]