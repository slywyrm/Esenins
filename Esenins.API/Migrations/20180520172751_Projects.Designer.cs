﻿// <auto-generated />
using Esenins.API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace Esenins.API.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20180520172751_Projects")]
    partial class Projects
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.0.3-rtm-10026");

            modelBuilder.Entity("Esenins.API.Models.Copyright", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("id");

                    b.Property<string>("Logo")
                        .HasColumnName("logo");

                    b.Property<string>("Name")
                        .HasColumnName("name");

                    b.HasKey("Id");

                    b.ToTable("copyrights");
                });

            modelBuilder.Entity("Esenins.API.Models.Image", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("id");

                    b.Property<string>("Path")
                        .HasColumnName("path");

                    b.Property<Guid?>("PortfolioItemId")
                        .HasColumnName("portfolio_item_id");

                    b.HasKey("Id");

                    b.HasIndex("PortfolioItemId");

                    b.ToTable("images");
                });

            modelBuilder.Entity("Esenins.API.Models.MainPageSlide", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("id");

                    b.Property<Guid?>("CopyrightId")
                        .HasColumnName("copyright_id");

                    b.Property<string>("Image")
                        .HasColumnName("image");

                    b.Property<string>("Text")
                        .HasColumnName("text");

                    b.HasKey("Id");

                    b.HasIndex("CopyrightId");

                    b.ToTable("main_page_slides");
                });

            modelBuilder.Entity("Esenins.API.Models.PortfolioItem", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("id");

                    b.Property<string>("Annotation")
                        .HasColumnName("annotation");

                    b.Property<Guid?>("CopyrightId")
                        .HasColumnName("copyright_id");

                    b.Property<string>("Description")
                        .HasColumnName("description");

                    b.Property<string>("Name")
                        .HasColumnName("name");

                    b.Property<int>("Order")
                        .HasColumnName("order");

                    b.Property<string>("PlaceholderPhoto")
                        .HasColumnName("placeholder_photo");

                    b.Property<string>("SubName")
                        .HasColumnName("sub_name");

                    b.Property<string>("TileSize")
                        .HasColumnName("tile_size");

                    b.HasKey("Id");

                    b.HasIndex("CopyrightId");

                    b.ToTable("portfolio");
                });

            modelBuilder.Entity("Esenins.API.Models.Project", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("id");

                    b.Property<Guid?>("CopyrightId")
                        .HasColumnName("copyright_id");

                    b.Property<string>("Name")
                        .HasColumnName("name");

                    b.Property<string>("PorfolioId")
                        .HasColumnName("porfolio_id");

                    b.Property<string>("ProjectsSectionId")
                        .HasColumnName("projects_section_id");

                    b.HasKey("Id");

                    b.HasIndex("CopyrightId");

                    b.HasIndex("ProjectsSectionId");

                    b.ToTable("projects");
                });

            modelBuilder.Entity("Esenins.API.Models.ProjectsSection", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("id");

                    b.Property<string>("Name")
                        .HasColumnName("name");

                    b.HasKey("Id");

                    b.ToTable("projects_by_section");
                });

            modelBuilder.Entity("Esenins.API.Models.Image", b =>
                {
                    b.HasOne("Esenins.API.Models.PortfolioItem")
                        .WithMany("Photos")
                        .HasForeignKey("PortfolioItemId");
                });

            modelBuilder.Entity("Esenins.API.Models.MainPageSlide", b =>
                {
                    b.HasOne("Esenins.API.Models.Copyright", "Copyright")
                        .WithMany()
                        .HasForeignKey("CopyrightId");
                });

            modelBuilder.Entity("Esenins.API.Models.PortfolioItem", b =>
                {
                    b.HasOne("Esenins.API.Models.Copyright", "Copyright")
                        .WithMany()
                        .HasForeignKey("CopyrightId");
                });

            modelBuilder.Entity("Esenins.API.Models.Project", b =>
                {
                    b.HasOne("Esenins.API.Models.Copyright", "Copyright")
                        .WithMany()
                        .HasForeignKey("CopyrightId");

                    b.HasOne("Esenins.API.Models.ProjectsSection")
                        .WithMany("Projects")
                        .HasForeignKey("ProjectsSectionId");
                });
#pragma warning restore 612, 618
        }
    }
}
