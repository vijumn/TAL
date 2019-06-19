using Microsoft.EntityFrameworkCore.Migrations;

namespace TAL.Database.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Ratings",
                columns: table => new
                {
                    RatingId = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(nullable: true),
                    Factor = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ratings", x => x.RatingId);
                });

            migrationBuilder.CreateTable(
                name: "Occupations",
                columns: table => new
                {
                    OccupationId = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(nullable: true),
                    RatingId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Occupations", x => x.OccupationId);
                    table.ForeignKey(
                        name: "FK_Occupations_Ratings_RatingId",
                        column: x => x.RatingId,
                        principalTable: "Ratings",
                        principalColumn: "RatingId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Ratings",
                columns: new[] { "RatingId", "Factor", "Name" },
                values: new object[] { 1, 1.0m, "Professional" });

            migrationBuilder.InsertData(
                table: "Ratings",
                columns: new[] { "RatingId", "Factor", "Name" },
                values: new object[] { 2, 1.25m, "White Collar" });

            migrationBuilder.InsertData(
                table: "Ratings",
                columns: new[] { "RatingId", "Factor", "Name" },
                values: new object[] { 3, 1.50m, "Light Manual" });

            migrationBuilder.InsertData(
                table: "Ratings",
                columns: new[] { "RatingId", "Factor", "Name" },
                values: new object[] { 4, 1.75m, "Heavy Manual" });

            migrationBuilder.InsertData(
                table: "Occupations",
                columns: new[] { "OccupationId", "Name", "RatingId" },
                values: new object[] { 2, "Doctor", 1 });

            migrationBuilder.InsertData(
                table: "Occupations",
                columns: new[] { "OccupationId", "Name", "RatingId" },
                values: new object[] { 3, "Author", 2 });

            migrationBuilder.InsertData(
                table: "Occupations",
                columns: new[] { "OccupationId", "Name", "RatingId" },
                values: new object[] { 1, "Cleaner", 3 });

            migrationBuilder.InsertData(
                table: "Occupations",
                columns: new[] { "OccupationId", "Name", "RatingId" },
                values: new object[] { 6, "Florist", 3 });

            migrationBuilder.InsertData(
                table: "Occupations",
                columns: new[] { "OccupationId", "Name", "RatingId" },
                values: new object[] { 4, "Farmer", 4 });

            migrationBuilder.InsertData(
                table: "Occupations",
                columns: new[] { "OccupationId", "Name", "RatingId" },
                values: new object[] { 5, "Mechanic", 4 });

            migrationBuilder.CreateIndex(
                name: "IX_Occupations_RatingId",
                table: "Occupations",
                column: "RatingId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Occupations");

            migrationBuilder.DropTable(
                name: "Ratings");
        }
    }
}
