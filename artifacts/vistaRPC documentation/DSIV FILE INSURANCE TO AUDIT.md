---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV FILE INSURANCE TO AUDIT 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIV FILE INSURANCE TO AUDIT{:/}
 tag | {::nomarkdown}IN{:/}
 routine | [DSIVIM](http://code.osehra.org/dox/Routine_DSIVIM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Files new insurance data fields from ICB to the DSIV ICB AUDIT (#19625) file that are not part of the INSURANCE BUFFER (#355.33) file so that theymay be updated as part of buffer processing by insurance verifiers.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DSIVAUD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pointer to the DSIV ICB AUDIT (#19625) file.{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}80{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains data to file in the following format: D DATA(n)=field^multi-id^value e.g. DATA(1)=\6.01^0^1\      DATA(2)=\6.02^0^2\      DATA(3)=\8^1^SYN1\ SYNONYM is fld 8, subfile 19625.08 (multiple)      DATA(4)=\8^2^SYN2\      DATA(5)=\9^1^FIRST LINE OF REMARKS\  REMARKS is field 9, wp field      DATA(6)=\9^2^SECOND LINE OF REMARKS\{:/} | 




 Generated on January 13th 2017, 6:24:32 am