# Installation

- If you do not have nestj `CLI` installed globally, do so by running `npm install -g @nestjs/cli@latest`

- To create a new nest project run `nest new project name`

# To Create

To create a new module, or controller, or service, or even entire resourse ensure you are in the correct folder

- To create a new module run in the `nest CLI` : `nest generate module modulename`

- To create a new controller run in the `nest CLI` : `nest generate controller controllername`

- To create a new service run in the `nest CLI` : `nest generate service servicename`

- To create an entire resource containing both `module, controller, service` run in the `nest CLI` : `nest generate resource resourcename`

## Controllers

Controllers define the paths, http methods for the paths

## Services/Providers

- The logic that is supposed to be in the controllers live in the services
- They are usually just a class with an `@Injectable` decorator. That means that particular service can be injected to any class that depends on it

### Note => Do not instantiate classes in Nestjs, because nestjs does it for you automatically

## Exceptions

Throwing exceptions when there are errors makes nestjs handle errors in a very neat way

## Installing Class Validators and Class Transformer

Run `npm install --save class-validator class-transformer`
