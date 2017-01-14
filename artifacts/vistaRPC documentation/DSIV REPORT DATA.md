---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV REPORT DATA 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIV REPORT DATA{:/}
 tag | {::nomarkdown}RPT{:/}
 routine | [DSIVICR](http://code.osehra.org/dox/Routine_DSIVICR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Retrieves data from the audit file 19625 for billing report.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAM{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the parameters to search for data:  DATA(\SDT\)=fileman start dt  DATA(\EDT\)=fileman end dt  DATA(\INDEX\)=index to use   \C\ or \D\ or \E\ or \F\ or \H\  DATA(\FIELDS\)=fields to return  \.01;.02;.03;.03I\  DATA(\NUMS\)=number of records to return (default=99999), not required  DATA(\MORE\)=1 to return addtl records, 0 to return first set               keep sending MORE=1 until $END$ is reached. FIELDS are DD fields separated by semi-colons only (no colon \ranged\ fields), FIELDS may be suffixed with \I\ for internal data vs default of external data format.  Data is returned in FIELDS order.{:/} | 




 Generated on January 13th 2017, 7:15:28 am