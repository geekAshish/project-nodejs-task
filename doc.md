# API structure

https://api.name.com/api/v1/tasks/:id?param-one=value-one&param-two=value-two

# Mongoose

### https://mongoosejs.com/docs/guide.html

1. only the schema properties are gonna save in database
2. other extra properties are gonna ignored
3. can add validation on schema

# Different between PUT vs PATCH

1. PATCH : it just update the field which is coming in req
2. PUT : it will replace the whole field with the coming req

# Error Handling

1. If we pass the error to the next(error), and didn't handle it in middleware, it'll handled by express by default

https://expressjs.com/en/guide/error-handling.html#the-default-error-handler

2. How to write error handling

https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
