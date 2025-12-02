'use client';
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { dataImpacto } from '@/data/informacionData';
import { publications } from '@/data/publications'

let referencias = Array.from(new Set(dataImpacto.map(item => item.referencia))).filter(Boolean);

/*
referencias = referencias.map(ref => {
  if (ref.includes('-') && !ref.includes('COVID-19') && !ref.includes('http') && !ref.includes('co-creativity')) {
    const publication_found = publications.find(pub => pub.slug === ref);
    return publication_found?.languages.es?.title || ref; // Reemplaza con el título o deja el slug si no se encuentra
  }
  return ref; // Deja el valor original si no cumple las condiciones
});
*/

const tiposUsuario = Array.from(new Set(dataImpacto.map(item => item.tipoUsuario))).filter(Boolean);

type Props = {
  onChange: (filtros: {
    año: string[]; 
    titulo: string;
    tipoUsuario: string;
    referencia : string;
  }) => void;
};




const ImpactFilters = ({ onChange }: Props) => {
  const [añosSeleccionados, setAñosSeleccionados] = useState<{ value: string; label: string }[]>([]);
  const [titulo, setTitulo] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('');
  const [referencia, setReferencia] = useState('');
  
  // const [año, setAño] = useState('');
  // const [documento, setDocumento] = useState('');
  // const [tipoUsuario, setTipoUsuario] = useState('');

  // useEffect(() => {
  //   onChange({ año, documento, tipoUsuario });
  // }, [año, documento, tipoUsuario]);
    useEffect(() => {
    onChange({
      año: añosSeleccionados.map(a => a.value),
      titulo,
      tipoUsuario,
      referencia,
    });
  }, [añosSeleccionados, titulo, tipoUsuario,referencia]);

  //valores estaticos
// const años = [
//   '2015',
//   '2016',
//   '2017',
//   '2018',
//   '2019',
//   '2020'
// ];

const años = [
  { value: '2015', label: '2015' },
  { value: '2016', label: '2016' },
  { value: '2017', label: '2017' },
  { value: '2018', label: '2018' },
  { value: '2019', label: '2019' },
  { value: '2020', label: '2020' },
  { value: '2022', label: '2022' },
];

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      {/* <select className="border rounded p-2" onChange={e => setAño(e.target.value)} value={año}>
        <option value="">AÑO</option>
        {años.map((a, i) => (
          <option key={i} value={a}>{a}</option>
        ))}
      </select> */}
     <Select
  isMulti
  options={años}
  value={añosSeleccionados}
  onChange={(selected) =>
    setAñosSeleccionados(selected as { value: string; label: string }[])
  }
  placeholder="AÑO"
  className="w-48"
  styles={{
    control: (base, state) => ({
      ...base,
      backgroundColor: '#003366',
      borderRadius: '9999px',
      padding: '2px 8px',
      border: 'none',
      boxShadow: state.isFocused ? '0 0 0 2px #0055aa' : 'none',
      minHeight: '48px',
      maxHeight: '48px',
      overflowY: 'hidden', 
      display: 'flex',
      flexWrap: 'nowrap', 
      alignItems: 'center',
    }),
    valueContainer: (base) => ({
      ...base,
      overflowX: 'auto',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: '#0055aa',
      borderRadius: '9999px',
      marginRight: '4px',
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: 'white',
      fontWeight: 'bold',
      padding: '0 6px',
    }),
    multiValueRemove: (base) => ({
      ...base,
      color: 'white',
      ':hover': {
        backgroundColor: '#003366',
        color: 'white',
      },
    }),
    singleValue: (base) => ({
      ...base,
      color: 'white',
      fontWeight: 600,
    }),
    placeholder: (base) => ({
      ...base,
      color: 'white',
      fontWeight: 600,
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: 'white',
    }),
    menu: (base) => ({
      ...base,
      zIndex: 999,
    }),
  }}
/>


{/* ESTE ES EL BUENO  */}
      {/* <select  className="bg-[#003366] text-white font-semibold rounded-full px-4 py-2 focus:outline-none"
      onChange={e => setDocumento(e.target.value)} value={documento}>
        <option value="">DOCUMENTO</option>
        {documentos.map((d, i) => (
          <option key={i} value={d}>{d}</option>
        ))}
      </select> */}

      {/* <select className="w-full whitespace-normal break-words">
        <option value="">DOCUMENTO</option>
      {documentos.map((doc, i) => (
        <option key={i} value={doc} className="whitespace-normal">
          {doc}
        </option>
      ))}
    </select> */}


      <select  className="bg-[#003366] text-white font-semibold rounded-full px-4 py-2 focus:outline-none"
       onChange={e => setTipoUsuario(e.target.value)} value={tipoUsuario}>
        <option value="">TIPO DE USUARIO</option>
        {tiposUsuario.map((t, i) => (
          <option key={i} value={t}>{t}</option>
        ))}
      </select>

      {/* DOCUMENTO */}
        <select
          className="bg-[#003366] text-white font-semibold rounded-full px-4 py-2 focus:outline-none w-full"
          onChange={e => setReferencia(e.target.value)}
          value={referencia}
        >
          <option value="">PUBLICACIONES</option>
          {referencias.map((ref) => (
            <option
              key={ref}
              value={ref}
              className="whitespace-normal break-words"
            >
              {ref}
            </option>
          ))}
        </select>

    </div>
  );
};

export default ImpactFilters;
