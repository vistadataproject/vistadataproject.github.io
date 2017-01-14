---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG DOD GET STUDIES UID 

 property | value 
--- | --- 
 label | {::nomarkdown}MAG DOD GET STUDIES UID{:/}
 tag | {::nomarkdown}STUDY1{:/}
 routine | [MAGDQR21](http://code.osehra.org/dox/Routine_MAGDQR21_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This Remote Procedure returns information about studies,based upon the Study UID that is provided as a parameter.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}STUDIES{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}1000{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter can either be provided as a single value or as an array.Each value found (either STUDIES or STUDIES(i)) will be evaluated by the Remote Procedure.Each value found must be the UID of a study.For each study specified, the Remote Procedure will returna hierarchical list of all series and images in that study.{:/} | 




 Generated on January 13th 2017, 7:15:28 am