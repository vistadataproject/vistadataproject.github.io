---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL INIT PT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL INIT PT{:/}
 tag | {::nomarkdown}INITPT{:/}
 routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}returns death indicator, sc and exposures{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | GET PATIENT PARAMETERS
 Input Parameters | {::nomarkdown}DFN{:/}
 Lines | {::nomarkdown} Q:+$G(DFN)=0<br/> N GMPSC,GMPAGTOR,GMPION,GMPGULF,GMPHNC,GMPMST,GMPCV,GMPSHD<br/> S RETURN(0)=DUZ(2) ; facility #<br/> D DEM^VADPT ; get death indicator<br/> S RETURN(1)=$G(VADM(6)) ; death indicator<br/> D VADPT^GMPLX1(DFN) ; get eligibilities<br/> S RETURN(2)=$P(GMPSC,U) ; service connected<br/> S RETURN(3)=$G(GMPAGTOR) ; agent orange exposure<br/> S RETURN(4)=$G(GMPION) ; ionizing radiation exposure<br/> S RETURN(5)=$G(GMPGULF) ; gulf war exposure<br/> S RETURN(6)=VA("BID") ; need this to reconstitute GMPDFN on return<br/> S RETURN(7)=$G(GMPHNC) ; head/neck cancer<br/> S RETURN(8)=$G(GMPMST) ; MST<br/> S RETURN(9)=$G(GMPCV) ; CV<br/> S RETURN(10)=$G(GMPSHD) ; SHAD{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} |  |  |  |  | 




 Generated on January 13th 2017, 7:15:27 am