'use client'
import s from './MobileTransactionItem.module.scss';
import { convertToSentenceCase } from '@/utils/functions';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { memo, useState } from 'react';
import uuid from 'react-uuid';
import { formatTimestamp } from '@/utils/functions';

export interface TableRowProps {
    item: any;
    index: number;
}

const MobileTransactionItem = memo(({ item, index }:TableRowProps) => {
    const allItems:any = Object.entries(item);
    const keys:any = Object.keys(allItems[0]);

    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const isEvenRow = index % 2 === 0;
  
    const mobileColumnValue = (key: string, value: string)=>{
    
    switch(key){
        case 'date':
            return formatTimestamp(Number(value));
        case 'completed':
            return (value?convertToSentenceCase(String(true)):
                                          convertToSentenceCase(String(false)))
        default: 
            return value;
    } 
  }
  
    return ( 
    <div className={`${s['tag-tagtable-container']} ${s['top-line']}`} >
      <div className={s['tag-tagtable-header']}
        // Hover functionalities to display or hide row menus including edit, create, etc
        onMouseEnter = {()=>setIsHovered(true)} 
        onMouseLeave = {()=>setIsHovered(false)} 
        // style = {{ background: isEvenRow ? '#fff' : '#f2f2f2', }}
      >
        <div className={s['tag-tagtable-header-main']} >
          {/* Check box and the name of tag*/}
            <span className = {s['tag-tagtable-input']} > {item.category}</span>         
        </div>
        {/* <div className={s['tag-tagtable-header-icons-container']}> */}
          <AiOutlineCaretDown 
            size = {16}
            /**
             * Collapsable Body Code For Asset Data (1 of 5)
             * **/ 
            onClick={() =>{setIsOpen(isOpen=>!isOpen);}}
            /**
             * Cont't - Collapsable Body Code For Asset Data (2 of 5)
             * **/
            style={{
                marginLeft: 'auto',
                cursor: 'pointer',
                transform: `rotate(${isOpen ? 0 : 180}deg)`
            }}
           />
        {/* </div> */}
      </div>
  
      <div className={s['tag-tagtable-body']}
        /**
         * Collapsable Body Code for Asset Data (3 of 5)
         * */ 
        style={{
          maxHeight: isOpen ? '100%' : 0,
          // overflow: 'hidden',
          transition: 'max-height 0.3s ease-out'
        }}
      >
        {/*Collapsable Body Code for Asset Data (4 of 5)*/}  
        {isOpen &&  <div className={`${s["tag-tagtable-form"]} ${s["tag-tagtable-body-content"]}`}
          /**
           * Collapsable Body Code for Asset Data (5 of 5)
           * */ 
          style={{
            maxHeight: isOpen ? '100%' : 0,
            // overflow: 'hidden',
            transition: 'max-height 0.3s ease-out',
            background: isEvenRow ? '#fff' : '#f2f2f2',
          }}
        >
          {
            allItems.map((elem: any)=>{
              const [key, value] = elem;
              
              return (
                <div key = {uuid()} className={s["tag-tagtable-inputGroup"]}>
                  <label className = {s['tag-tagtable-label']}>{key}</label>
                  <span className = {s['tag-tagtable-input']}>{mobileColumnValue(key, value)} </span>                    
                </div>
              )
            })
          }
          </div>}
        </div>
      </div>
    )
  })

  export default MobileTransactionItem