using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddServiceCollection(builder.Configuration);


var app = builder.Build();

app.Services.AddCustomService(builder.Configuration);
app.UseSwagger();
app.UseSwaggerUI();

app.MapControllers(); // используется для регистрации маршрутов контроллеров и промежуточного слоя MVC
app.UseCors("CorsPolicy");
app.Run();

