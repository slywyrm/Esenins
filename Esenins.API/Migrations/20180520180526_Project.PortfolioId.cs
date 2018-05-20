using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Esenins.API.Migrations
{
    public partial class ProjectPortfolioId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "porfolio_id",
                table: "projects",
                newName: "portfolio_id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "portfolio_id",
                table: "projects",
                newName: "porfolio_id");
        }
    }
}
