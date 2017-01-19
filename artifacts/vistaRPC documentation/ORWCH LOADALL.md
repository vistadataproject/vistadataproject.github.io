---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCH LOADALL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWCH LOADALL{:/}
 tag | {::nomarkdown}LOADALL{:/}
 routine | [ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC returns the sizing related CPRS GUI chart parameters for theuser.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | LOADALL^[ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html)
 Method comment | load all the sizing related paramters
 Code | {::nomarkdown}  N ORBOUNDS,ORWIDTHS,ORCOLMNS,ILST S ILST=0<br> D GETLST^XPAR(.ORBOUNDS,DUZ_";VA(200,","ORWCH BOUNDS")<br> D GETLST^XPAR(.ORWIDTHS,DUZ_";VA(200,","ORWCH WIDTH")<br> D GETLST^XPAR(.ORCOLMNS,DUZ_";VA(200,","ORWCH COLUMNS")<br> S ILST=ILST+1,LST(ILST)="~Bounds"<br> S I="" F  S I=$O(ORBOUNDS(I)) Q:'I  S ILST=ILST+1,LST(ILST)="i"_ORBOUNDS(I)<br> S ILST=ILST+1,LST(ILST)="~Widths"<br> S I="" F  S I=$O(ORWIDTHS(I)) Q:'I  S ILST=ILST+1,LST(ILST)="i"_ORWIDTHS(I)<br> S ILST=ILST+1,LST(ILST)="~Columns"<br> S I="" F  S I=$O(ORCOLMNS(I)) Q:'I  S ILST=ILST+1,LST(ILST)="i"_ORCOLMNS(I){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}