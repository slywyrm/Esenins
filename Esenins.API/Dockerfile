FROM microsoft/aspnetcore:latest AS base
WORKDIR /app
EXPOSE 5000

FROM microsoft/aspnetcore-build:latest AS build
WORKDIR /src
COPY . .
RUN dotnet restore
COPY . .
WORKDIR /src
RUN dotnet build -c Release -o /app

FROM build AS publish
RUN dotnet publish -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Esenins.API.dll"]