---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQPL INIT PT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL INIT PT{:/}
 tag | {::nomarkdown}INITPT{:/}
 routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}returns death indicator, sc and exposures{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} |  |  |  |  | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | INITPT^[ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 Method comment | GET PATIENT PARAMETERS
 Input parameters | {::nomarkdown}DFN{:/}
 Code | ```  Q:+$G(DFN)=0
 N GMPSC,GMPAGTOR,GMPION,GMPGULF,GMPHNC,GMPMST,GMPCV,GMPSHD
 S RETURN(0)=DUZ(2) ; facility #
 D DEM^VADPT ; get death indicator
 S RETURN(1)=$G(VADM(6)) ; death indicator
 D VADPT^GMPLX1(DFN) ; get eligibilities
 S RETURN(2)=$P(GMPSC,U) ; service connected
 S RETURN(3)=$G(GMPAGTOR) ; agent orange exposure
 S RETURN(4)=$G(GMPION) ; ionizing radiation exposure
 S RETURN(5)=$G(GMPGULF) ; gulf war exposure
 S RETURN(6)=VA("BID") ; need this to reconstitute GMPDFN on return
 S RETURN(7)=$G(GMPHNC) ; head/neck cancer
 S RETURN(8)=$G(GMPMST) ; MST
 S RETURN(9)=$G(GMPCV) ; CV
 S RETURN(10)=$G(GMPSHD) ; SHAD```




 Generated on January 14th 2017, 7:26:35 am