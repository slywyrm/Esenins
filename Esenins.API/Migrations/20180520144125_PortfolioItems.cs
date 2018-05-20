using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Esenins.API.Migrations
{
    public partial class PortfolioItems : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "portfolio",
                columns: table => new
                {
                    id = table.Column<Guid>(nullable: false),
                    annotation = table.Column<string>(nullable: true),
                    copyright_id = table.Column<Guid>(nullable: true),
                    description = table.Column<string>(nullable: true),
                    name = table.Column<string>(nullable: true),
                    placeholder_photo = table.Column<string>(nullable: true),
                    sub_name = table.Column<string>(nullable: true),
                    tile_size = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_portfolio", x => x.id);
                    table.ForeignKey(
                        name: "FK_portfolio_copyrights_copyright_id",
                        column: x => x.copyright_id,
                        principalTable: "copyrights",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "images",
                columns: table => new
                {
                    id = table.Column<Guid>(nullable: false),
                    path = table.Column<string>(nullable: true),
                    portfolio_item_id = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_images", x => x.id);
                    table.ForeignKey(
                        name: "FK_images_portfolio_portfolio_item_id",
                        column: x => x.portfolio_item_id,
                        principalTable: "portfolio",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_images_portfolio_item_id",
                table: "images",
                column: "portfolio_item_id");

            migrationBuilder.CreateIndex(
                name: "IX_portfolio_copyright_id",
                table: "portfolio",
                column: "copyright_id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "images");

            migrationBuilder.DropTable(
                name: "portfolio");
        }
    }
}
