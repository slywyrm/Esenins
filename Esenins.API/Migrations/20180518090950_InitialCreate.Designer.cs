﻿// <auto-generated />
using Esenins.API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;
using Npgsql;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace Esenins.API.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20180518090950_InitialCreate")]
    partial class InitialCreate
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

            modelBuilder.Entity("Esenins.API.Models.MainPageSlide", b =>
                {
                    b.HasOne("Esenins.API.Models.Copyright", "Copyright")
                        .WithMany()
                        .HasForeignKey("CopyrightId");
                });
#pragma warning restore 612, 618
        }
    }
}
