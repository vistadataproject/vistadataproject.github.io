---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCH LOADALL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWCH LOADALL{:/}
 tag | {::nomarkdown}LOADALL{:/}
 routine | [ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC returns the sizing related CPRS GUI chart parameters for theuser.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | load all the sizing related paramters
 Lines | ```
 N ORBOUNDS,ORWIDTHS,ORCOLMNS,ILST S ILST=0
 D GETLST^XPAR(.ORBOUNDS,DUZ_";VA(200,","ORWCH BOUNDS")
 D GETLST^XPAR(.ORWIDTHS,DUZ_";VA(200,","ORWCH WIDTH")
 D GETLST^XPAR(.ORCOLMNS,DUZ_";VA(200,","ORWCH COLUMNS")
 S ILST=ILST+1,LST(ILST)="~Bounds"
 S I="" F  S I=$O(ORBOUNDS(I)) Q:'I  S ILST=ILST+1,LST(ILST)="i"_ORBOUNDS(I)
 S ILST=ILST+1,LST(ILST)="~Widths"
 S I="" F  S I=$O(ORWIDTHS(I)) Q:'I  S ILST=ILST+1,LST(ILST)="i"_ORWIDTHS(I)
 S ILST=ILST+1,LST(ILST)="~Columns"
 S I="" F  S I=$O(ORCOLMNS(I)) Q:'I  S ILST=ILST+1,LST(ILST)="i"_ORCOLMNS(I)```




 Generated on January 13th 2017, 6:55:29 am