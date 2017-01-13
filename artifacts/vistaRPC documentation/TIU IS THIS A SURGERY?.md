---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU IS THIS A SURGERY? 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU IS THIS A SURGERY?{:/}
 tag | {::nomarkdown}ISSURG{:/}
 routine | [TIUSROI](http://code.osehra.org/dox/Routine_TIUSROI_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}BOOLEAN RPC which evaluates whether the title indicated is that of aSURGICAL REPORT or PROCEDURE REPORT (NON-O.R.).{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Boolean RPC to evaluate whether TITLE is a SURGERY REPORT
 Input Parameters | {::nomarkdown}TITLE{:/}
 Lines | ```
 N TIUCLASS,TIUI S TIUY=0
 F TIUI="SURGICAL REPORTS","PROCEDURE REPORTS (NON-O.R.)" D  Q:TIUY>0
 . S TIUCLASS=+$$CLASS(TIUI)
 . I +TIUCLASS'>0 Q
 . S TIUY=+$$ISA^TIULX(TITLE,TIUCLASS)```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TITLE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the record number in file 8925.1 for the title selected.{:/} | 




 Generated on January 13th 2017, 6:55:29 am