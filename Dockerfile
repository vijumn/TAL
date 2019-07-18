FROM microsoft/dotnet:2.2-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM microsoft/dotnet:2.2-sdk AS build
WORKDIR /src
COPY ["Web/TAL.UI.Web/TAL.UI.Web.csproj", "Web/TAL.UI.Web/"]
COPY ["Domain/TAL.Domain/TAL.Premium.Domain.csproj", "Domain/TAL.Domain/"]
COPY ["Model/TAL.Model/TAL.Model.csproj", "Model/TAL.Model/"]
COPY ["Database/TAL.Database/TAL.Database.csproj", "Database/TAL.Database/"]
RUN dotnet restore "Web/TAL.UI.Web/TAL.UI.Web.csproj"
COPY . .
WORKDIR "/src/Web/TAL.UI.Web"
RUN dotnet build "TAL.UI.Web.csproj" -c Release -o /app



FROM node:12.2.0-alpine as node-build
WORKDIR /web
COPY  /Web/TAL.UI.Web/ .
RUN npm install --suppess-warnings --loglevel=error
RUN npm run build:prod

# # Angular
# FROM node:12.2.0-alpine AS angular-build
# ARG ANGULAR_ENVIRONMENT
# WORKDIR /ClientApp
# ENV PATH /ClientApp/node_modules/.bin:$PATH
# COPY /Web/TAL.UI.Web/ClientApp/package.json .
# COPY /Web/TAL.UI.Web/ClientApp/angular.json .
# COPY /Web/TAL.UI.Web/ClientApp/tsconfig.json .
# RUN npm  install --suppess-warnings --loglevel=error
# COPY /Web/TAL.UI.Web/ClientApp/ .
# RUN npm run build:prod

# FROM build AS publish
# RUN dotnet publish "TAL.UI.Web.csproj" -c Release -o /app

FROM build as publish
WORKDIR /Web/TAL.UI.Web/wwwroot
COPY --from=node-build /web/wwwroot .
WORKDIR /src
COPY . .
WORKDIR /src/Web/TAL.UI.Web
RUN dotnet publish "TAL.UI.Web.csproj" -c Release -o /app
WORKDIR  /app
COPY /Web/TAL.UI.Web/TAL.db .



FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "TAL.UI.Web.dll"]