---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQPL INIT PT
# ORQQPL INIT PT

returns death indicator, sc and exposures

Property | Value
--- | ---
Label | INITPT
Routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN |  |  |  | 



### MUMPS Method Description

Property | Value
--- | ---
Method | [INITPT^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
Method Comment | GET PATIENT PARAMETERS
Input Parameters | DFN
Code | {::nomarkdown}<pre><code> Q:+$G(DFN)=0<br/> N GMPSC,GMPAGTOR,GMPION,GMPGULF,GMPHNC,GMPMST,GMPCV,GMPSHD<br/> S RETURN(0)=DUZ(2) ; facility #<br/> D DEM^VADPT ; get death indicator<br/> S RETURN(1)=$G(VADM(6)) ; death indicator<br/> D VADPT^GMPLX1(DFN) ; get eligibilities<br/> S RETURN(2)=$P(GMPSC,U) ; service connected<br/> S RETURN(3)=$G(GMPAGTOR) ; agent orange exposure<br/> S RETURN(4)=$G(GMPION) ; ionizing radiation exposure<br/> S RETURN(5)=$G(GMPGULF) ; gulf war exposure<br/> S RETURN(6)=VA("BID") ; need this to reconstitute GMPDFN on return<br/> S RETURN(7)=$G(GMPHNC) ; head/neck cancer<br/> S RETURN(8)=$G(GMPMST) ; MST<br/> S RETURN(9)=$G(GMPCV) ; CV<br/> S RETURN(10)=$G(GMPSHD) ; SHAD</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas">rProbs.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/BA/UBAGlobals.pas">BA/UBAGlobals.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}