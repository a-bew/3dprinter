import React, { useEffect, useRef, useState } from 'react'
import { MdOutlineTipsAndUpdates } from 'react-icons/md';
import styles from './UpdateComponents.module.scss';
import { RiAddBoxLine } from 'react-icons/ri';
import OverlaySpinner from './OverlaySpinner';
import { GrTableAdd } from 'react-icons/gr';

export const TableHead = ({ style, data, }: { style: any, data: any, }) => {

  const refInput: any = useRef(null);

  const [headData, setHeadData] = useState('');
  const [onHover, setOnHover] = useState(false);
  const [displayInput, setDisplayInput] = useState(false);

  useEffect(() => {
    setHeadData(data)
  }, [data]);

  const onMouseEnter = () => {
    setOnHover(true);
  }

  const onMouseLeave = () => {
    setOnHover(false);
    setDisplayInput(false);

  }

  const onChange = (event: any) => {
    setHeadData(event.target.value)
  }

  const onClick = (event: any) => {
    setTimeout(() => {
      refInput.current && refInput.current.focus()
    }, 100)
    setDisplayInput(true);
  }

  const onBlurInput = (event: any) => {
    setOnHover(false);
    setDisplayInput(false);
  }

  return (
    <th style={{ ...style, position: 'relative' }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <span className={styles['td-cell']} style={{ color: onHover ? '#ccc' : '' }}>{data}</span>

      {onHover && !displayInput && <span className={styles['update-icon']} onClick={onClick}>
        <MdOutlineTipsAndUpdates style={{ opacity: 1 }} size={24} />
      </span>}
      {onHover && displayInput && <input ref={refInput} className={styles['table-head-input']} type="text" value={headData} onChange={onChange} onBlur={onBlurInput} />}
    </th>
  )
}

export const TableData = ({ data, }: { data: any, }) => {
  const refInput: any = useRef(null);

  const [headData, setHeadData] = useState('');
  const [onHover, setOnHover] = useState(false);
  const [displayInput, setDisplayInput] = useState(false);

  useEffect(() => {
    setHeadData(data)
  }, [data]);

  const onMouseEnter = () => {
    setOnHover(true);
  }

  const onMouseLeave = () => {
    setOnHover(false);
    setDisplayInput(false);

  }

  const onChange = (event: any) => {
    setHeadData(event.target.value)
  }

  const onClick = (event: any) => {
    setTimeout(() => {
      refInput.current && refInput.current.focus()
    }, 100)
    setDisplayInput(true);
  }

  const onBlurInput = (event: any) => {
    setOnHover(false);
    setDisplayInput(false);
  }


  return (
    <td style={{ position: 'relative' }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <span className={styles['td-cell']} style={{ color: onHover ? '#ccc' : '' }}>{data}</span>

      {onHover && !displayInput && <span className={styles['update-icon']} onClick={onClick}>
        <MdOutlineTipsAndUpdates style={{ opacity: 1 }} size={24} />
      </span>}
      {onHover && displayInput && <input ref={refInput} className={styles['table-head-input']} type="text" value={headData} onChange={onChange} onBlur={onBlurInput} />}
    </td>
  )
}

export const EmptyTableData = ({ data = '', }: { data?: any, }) => {
  const refInput: any = useRef(null);

  const [headData, setHeadData] = useState('');
  const [onHover, setOnHover] = useState(false);
  const [displayInput, setDisplayInput] = useState(false);
  const [valueExist, setValueExist] = useState(false);

  useEffect(() => {
    setHeadData(data)
  }, [data]);

  const onMouseEnter = () => {
    setOnHover(true);
  }

  const onMouseLeave = () => {
    setOnHover(false);
    setDisplayInput(false);
    headData && setValueExist(true);

    // setTimeout(() => {
    //   setValueExist(false);
    // }, 3000)
  }

  const onChange = (event: any) => {
    setHeadData(event.target.value)
  }

  const onClick = (event: any) => {
    setTimeout(() => {
      refInput.current && refInput.current.focus()
    }, 100)
    setDisplayInput(true);
    setValueExist(false)
  }

  const onBlurInput = (event: any) => {
    setOnHover(false);
    setDisplayInput(false);
  }

  return (
    <td style={{ position: 'relative' }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
      <span className={styles['td-cell']} style={{ color: '#ccc' }}>{!valueExist ? data : headData}</span>


      {valueExist && <span className={styles['update-icon']} style={{ backgroundColor: 'transparent' }} onClick={onClick}>
        <OverlaySpinner />
      </span>}

      {!valueExist && !displayInput && <span className={styles['update-icon']} onClick={onClick}>
        <RiAddBoxLine style={{ opacity: 1 }} size={24} color={onHover ? '' : '#aaa'} />
      </span>}

      {!valueExist && onHover && displayInput && <input ref={refInput} className={styles['table-head-input']} type="text" value={headData} onChange={onChange} onBlur={onBlurInput} />}

    </td>
  )
}

export const RowCell0 = ({ icon: Icon, onClick, style }: { icon: any, onClick: any, style?: any }) => {
  const [onHover, setOnHover] = useState(false);

  const onMouseEnter = () => {
    setOnHover(true);
  }

  const onMouseLeave = () => {
    setOnHover(false);
  }


  return (<td style={{ ...style, position: 'relative', border: '#eee solid 1px', height: 40, }}><span className={styles['update-icon']} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
    <Icon className={styles['update-icon']} style={{ opacity: 1, margin: 'auto', width: 32, height: 32, marginLeft: 8, bottom: 10 }} size={16} color={onHover ? '' : '#aaa'} />
  </span></td>)
}
