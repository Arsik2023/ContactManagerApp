using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;
public static class ApplicationServiceCollectionExtension
{
    public static IServiceCollection AddServiceCollection(
        this IServiceCollection services,
        ConfigurationManager configuration)
    {
        services.AddControllers(); // добавляет сервис для работы с контроллерами
        var stringConnection = configuration.GetConnectionString("SqliteStringConnection");
        services.AddDbContext<SqliteDbContext>(opt => opt.UseSqlite(stringConnection));

        services.AddScoped<IPaginationStorage, SqlitePaginationEfStorage>();
        services.AddScoped<IInitializer, SqliteEfFakerInitializer>();
        services.AddCors(
            opt => opt.AddPolicy("CorsPolicy", policy =>
            {
                policy.AllowAnyMethod()
                .AllowAnyHeader()
                .WithOrigins(configuration["client"]);
            })
        );
        services.AddSwaggerGen(opt =>
        {
            opt.SwaggerDoc("v1", new OpenApiInfo
            {
                Title = "Api для списка контактов"
            });
        });

        return services;
    }
}