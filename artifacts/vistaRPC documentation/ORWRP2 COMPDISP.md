---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP2 COMPDISP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP2 COMPDISP{:/}
 tag | {::nomarkdown}COMPDISP{:/}
 routine | [ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC returns an array of the ADHOC Health Summary components by display name.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | COMPDISP^[ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 Method comment | Get ADHOD sub components listed by Display Name
 Code | {::nomarkdown}  N I,X,X1,X2,X3<br> D COMP^GMTSADH5(.ORY)<br> S I=0<br> F  S I=$O(ORY(I)) Q:'I  S X=ORY(I) D<br> . S X1=$P($P(X,"^",2),"["),X1=$E(X1,1,$L(X1)-1),X2=$P($P(X,"^",2),"[",2),X2=$E(X2,1,$L(X2)-1)<br> . S X3=$P(X,"^",5)_"   ["_X2_"]",$P(ORY(I),"^",2)=X3{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}