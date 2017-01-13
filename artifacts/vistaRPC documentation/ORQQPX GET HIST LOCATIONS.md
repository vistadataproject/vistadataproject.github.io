---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPX GET HIST LOCATIONS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPX GET HIST LOCATIONS{:/}
 tag | {::nomarkdown}HISTLOC{:/}
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns a list of historical locations from the LOCATION file(#9999999.06).{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Returns a list of historical locations
 Lines | {::nomarkdown} N IDX,PTR,LINE,NAME<br/> K ^TMP("OR",$J,"LOC")<br/> S LST=$NA(^TMP("OR",$J,"LOC"))<br/> S (LINE,IDX)=0<br/> F  S IDX=$O(^AUTTLOC(IDX)) Q:'IDX  D<br/> .S PTR=+$G(^AUTTLOC(IDX,0))<br/> .I +PTR D<br/> ..;S NAME=$P($G(^DIC(4,PTR,0)),U)<br/> ..S NAME=$$GET1^DIQ(4,PTR,.01,"I")<br/> ..I NAME'="" D<br/> ...S LINE=LINE+1<br/> ...S ^TMP("OR",$J,"LOC",LINE)=PTR_U_NAME{:/}




 Generated on January 13th 2017, 7:15:27 am