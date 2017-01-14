---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQPX GET HIST LOCATIONS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPX GET HIST LOCATIONS{:/}
 tag | {::nomarkdown}HISTLOC{:/}
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns a list of historical locations from the LOCATION file(#9999999.06).{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | HISTLOC^[ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 Method comment | Returns a list of historical locations
 Code | ```  N IDX,PTR,LINE,NAME
 K ^TMP("OR",$J,"LOC")
 S LST=$NA(^TMP("OR",$J,"LOC"))
 S (LINE,IDX)=0
 F  S IDX=$O(^AUTTLOC(IDX)) Q:'IDX  D
 .S PTR=+$G(^AUTTLOC(IDX,0))
 .I +PTR D
 ..;S NAME=$P($G(^DIC(4,PTR,0)),U)
 ..S NAME=$$GET1^DIQ(4,PTR,.01,"I")
 ..I NAME'="" D
 ...S LINE=LINE+1
 ...S ^TMP("OR",$J,"LOC",LINE)=PTR_U_NAME```




 Generated on January 14th 2017, 7:26:35 am