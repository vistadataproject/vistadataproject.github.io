---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV LIST ENTRIES2 

 property | value 
--- | --- 
 label | DSIV LIST ENTRIES2
 tag | LIST
 routine | [DSIVIC3](http://code.osehra.org/dox/Routine_DSIVIC3_source.html)
 return value type | GLOBAL ARRAY
 description | Returns INSURANCE BUFFER file entries for specified date range. Each return value has the form - BUFFER IEN^DFN^ << requested fields >> ^SSN^FLAGS^SYMBOL^DIV^IMAGES^ERR where SSN is the full patient SSN, FLAGS are the \iIEYH\ flags, SYMBOL is the IIV status (where the record is in electronic processing), DIV is the users default division, and IMAGES is field #2 IMAGES SCANNED from the DSIV AUDIT file (#19625) ERR is the one-line eIV error message (if applicable)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| SDT | LITERAL | 14 | true | Start date in FileMan internal format. | 
| EDT | LITERAL | 14 | true | Inclusive end date in FileMan internal format (optional). | 
| FLDS | LITERAL | 100 | true | Field list (optional).  If not specified .01I;.01 are returned. | 
| NUMS | LITERAL | 10 | true |  Contains the maximum number of entries to return per rpc call. If not defined, then all entries will be returned (backward compatible). | 
| MORE | LITERAL | 1 | true |  Used with the NUMS parameter, More=0 means first call to rpc, More'=0 means get the next 'set' of NUMS records.  The data will end with a record = $END$ to tell the gui that there are no more records. | 




 ###### Generated on January 11th 2017, 6:39:43 am