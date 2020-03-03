using Microsoft.EntityFrameworkCore.Migrations;

namespace DonationWebAPI.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DCandidates",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Age = table.Column<int>(nullable: false),
                    Address = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    BloodGroup = table.Column<string>(type: "nvarchar(3)", nullable: true),
                    Mobile = table.Column<string>(type: "nvarchar(16)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DCandidates", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DCandidates");
        }
    }
}
