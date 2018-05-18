using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Esenins.API.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "copyrights",
                columns: table => new
                {
                    id = table.Column<Guid>(nullable: false),
                    logo = table.Column<string>(nullable: true),
                    name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_copyrights", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "main_page_slides",
                columns: table => new
                {
                    id = table.Column<Guid>(nullable: false),
                    copyright_id = table.Column<Guid>(nullable: true),
                    image = table.Column<string>(nullable: true),
                    text = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_main_page_slides", x => x.id);
                    table.ForeignKey(
                        name: "FK_main_page_slides_copyrights_copyright_id",
                        column: x => x.copyright_id,
                        principalTable: "copyrights",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_main_page_slides_copyright_id",
                table: "main_page_slides",
                column: "copyright_id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "main_page_slides");

            migrationBuilder.DropTable(
                name: "copyrights");
        }
    }
}
