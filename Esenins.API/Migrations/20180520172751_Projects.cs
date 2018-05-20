using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Esenins.API.Migrations
{
    public partial class Projects : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "projects_by_section",
                columns: table => new
                {
                    id = table.Column<string>(nullable: false),
                    name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_projects_by_section", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "projects",
                columns: table => new
                {
                    id = table.Column<Guid>(nullable: false),
                    copyright_id = table.Column<Guid>(nullable: true),
                    name = table.Column<string>(nullable: true),
                    porfolio_id = table.Column<string>(nullable: true),
                    projects_section_id = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_projects", x => x.id);
                    table.ForeignKey(
                        name: "FK_projects_copyrights_copyright_id",
                        column: x => x.copyright_id,
                        principalTable: "copyrights",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_projects_projects_by_section_projects_section_id",
                        column: x => x.projects_section_id,
                        principalTable: "projects_by_section",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_projects_copyright_id",
                table: "projects",
                column: "copyright_id");

            migrationBuilder.CreateIndex(
                name: "IX_projects_projects_section_id",
                table: "projects",
                column: "projects_section_id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "projects");

            migrationBuilder.DropTable(
                name: "projects_by_section");
        }
    }
}
