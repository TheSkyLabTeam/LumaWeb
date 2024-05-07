import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const startDate = searchParams.get('startDate')
  const endDate = searchParams.get('endDate')

  const db = await open({
    filename: 'src//app//api//DATA.sqlite',
    driver: sqlite3.Database
  });
  

  let data171;
  let data195;
  let data284;
  let data304;
  let datahmiigr;
  let datahmimag;

  try {
    data171 = await db.all(`SELECT * FROM eit171 WHERE Date BETWEEN ? AND ?`, [startDate, endDate]);
    data195 = await db.all(`SELECT * FROM eit195 WHERE Date BETWEEN ? AND ?`, [startDate, endDate]);
    data284 = await db.all(`SELECT * FROM eit284 WHERE Date BETWEEN ? AND ?`, [startDate, endDate]);
    data304 = await db.all(`SELECT * FROM eit304 WHERE Date BETWEEN ? AND ?`, [startDate, endDate]);
    datahmiigr = await db.all(`SELECT * FROM hmiigr WHERE Date BETWEEN ? AND ?`, [startDate, endDate]);
    datahmimag = await db.all(`SELECT * FROM hmimag WHERE Date BETWEEN ? AND ?`, [startDate, endDate]);
  } catch (error) {
    return NextResponse.json({ error });
  }
  return NextResponse.json({
    data171: {
      rows: data171.map(item => ({
        date: item.date,
        url: item.url,
        entropy: item.entropy,
        mean_intensity: item.mean_intensity,
        standard_deviation: item.standard_deviation,
        skewness: item.skewness,
        kurtosis: item.kurtosis,
        relative_smoothness: item.relative_smoothness,
        uniformity: item.uniformity,
        fractal_dimension: item.fractal_dimension,
        taruma_contrast: item.taruma_contrast,
        taruma_directionality: item.taruma_directionality,
        taruma_coarseness: item.taruma_coarseness,
        taruma_linelikeness: item.taruma_linelikeness,
        taruma_regularity: item.taruma_regularity,
        taruma_roughness: item.taruma_roughness,
      }))
    },
    data195: {
      rows: data195.map(item => ({
      date: item.date,
      url: item.url,
      entropy: item.entropy,
      mean_intensity: item.mean_intensity,
      standard_deviation: item.standard_deviation,
      skewness: item.skewness,
      kurtosis: item.kurtosis,
      relative_smoothness: item.relative_smoothness,
      uniformity: item.uniformity,
      fractal_dimension: item.fractal_dimension,
      taruma_contrast: item.taruma_contrast,
      taruma_directionality: item.taruma_directionality,
      taruma_coarseness: item.taruma_coarseness,
      taruma_linelikeness: item.taruma_linelikeness,
      taruma_regularity: item.taruma_regularity,
      taruma_roughness: item.taruma_roughness,
      }))
    },
    data284: {
      rows: data284.map(item => ({
        date: item.date,
        url: item.url,
        entropy: item.entropy,
        mean_intensity: item.mean_intensity,
        standard_deviation: item.standard_deviation,
        skewness: item.skewness,
        kurtosis: item.kurtosis,
        relative_smoothness: item.relative_smoothness,
        uniformity: item.uniformity,
        fractal_dimension: item.fractal_dimension,
        taruma_contrast: item.taruma_contrast,
        taruma_directionality: item.taruma_directionality,
        taruma_coarseness: item.taruma_coarseness,
        taruma_linelikeness: item.taruma_linelikeness,
        taruma_regularity: item.taruma_regularity,
        taruma_roughness: item.taruma_roughness,
      }))
    },
    data304: {
      rows: data304.map(item => ({
        date: item.date,
        url: item.url,
        entropy: item.entropy,
        mean_intensity: item.mean_intensity,
        standard_deviation: item.standard_deviation,
        skewness: item.skewness,
        kurtosis: item.kurtosis,
        relative_smoothness: item.relative_smoothness,
        uniformity: item.uniformity,
        fractal_dimension: item.fractal_dimension,
        taruma_contrast: item.taruma_contrast,
        taruma_directionality: item.taruma_directionality,
        taruma_coarseness: item.taruma_coarseness,
        taruma_linelikeness: item.taruma_linelikeness,
        taruma_regularity: item.taruma_regularity,
        taruma_roughness: item.taruma_roughness,
      }))
    },
    datahmiigr: {
      rows: datahmiigr.map(item => ({
        date: item.date,
        url: item.url,
        entropy: item.entropy,
        mean_intensity: item.mean_intensity,
        standard_deviation: item.standard_deviation,
        skewness: item.skewness,
        kurtosis: item.kurtosis,
        relative_smoothness: item.relative_smoothness,
        uniformity: item.uniformity,
        fractal_dimension: item.fractal_dimension,
        taruma_contrast: item.taruma_contrast,
        taruma_directionality: item.taruma_directionality,
        taruma_coarseness: item.taruma_coarseness,
        taruma_linelikeness: item.taruma_linelikeness,
        taruma_regularity: item.taruma_regularity,
        taruma_roughness: item.taruma_roughness,
      }))
    },
    datahmimag: {
      rows: datahmimag.map(item => ({
        date: item.date,
        url: item.url,
        entropy: item.entropy,
        mean_intensity: item.mean_intensity,
        standard_deviation: item.standard_deviation,
        skewness: item.skewness,
        kurtosis: item.kurtosis,
        relative_smoothness: item.relative_smoothness,
        uniformity: item.uniformity,
        fractal_dimension: item.fractal_dimension,
        taruma_contrast: item.taruma_contrast,
        taruma_directionality: item.taruma_directionality,
        taruma_coarseness: item.taruma_coarseness,
        taruma_linelikeness: item.taruma_linelikeness,
        taruma_regularity: item.taruma_regularity,
        taruma_roughness: item.taruma_roughness,
      }))
    },
  });
}
