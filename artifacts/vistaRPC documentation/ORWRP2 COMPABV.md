---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP2 COMPABV 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP2 COMPABV{:/}
 tag | {::nomarkdown}COMPABV{:/}
 routine | [ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC returns an array of the ADHOC Health Summary components by abbreviation.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get ADHOD sub components listed by Abbreviation
 Lines | {::nomarkdown} N I,X,X1,X2,X3<br/> D COMP^GMTSADH5(.ORY)<br/> S I=0<br/> F  S I=$O(ORY(I)) Q:'I  S X=ORY(I) D<br/> . S X1=$P($P(X,"^",2),"["),X1=$E(X1,1,$L(X1)-1),X2=$P($P(X,"^",2),"[",2),X2=$E(X2,1,$L(X2)-1)<br/> . S X3=X2_"   - "_$P(X,"^",5)_" ",$P(ORY(I),"^",2)=X3{:/}




 Generated on January 13th 2017, 7:15:28 am