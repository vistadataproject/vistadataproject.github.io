---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPX GET HIST LOCATIONS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPX GET HIST LOCATIONS{:/}
 tag | {::nomarkdown}HISTLOC{:/}
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns a list of historical locations from the LOCATION file(#9999999.06).{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | HISTLOC^[ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 Method comment | Returns a list of historical locations
 Code | {::nomarkdown}  N IDX,PTR,LINE,NAME<br> K ^TMP("OR",$J,"LOC")<br> S LST=$NA(^TMP("OR",$J,"LOC"))<br> S (LINE,IDX)=0<br> F  S IDX=$O(^AUTTLOC(IDX)) Q:'IDX  D<br> .S PTR=+$G(^AUTTLOC(IDX,0))<br> .I +PTR D<br> ..;S NAME=$P($G(^DIC(4,PTR,0)),U)<br> ..S NAME=$$GET1^DIQ(4,PTR,.01,"I")<br> ..I NAME'="" D<br> ...S LINE=LINE+1<br> ...S ^TMP("OR",$J,"LOC",LINE)=PTR_U_NAME{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}