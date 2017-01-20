---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG DOD GET STUDIES IEN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG DOD GET STUDIES IEN{:/}
 tag | {::nomarkdown}STUDY2{:/}
 routine | [MAGDQR21](http://code.osehra.org/dox/Routine_MAGDQR21_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This Remote Procedure returns information about studies,based upon the IEN (File #2005 or #2005.1) of the image group, Patient Number,Study-Level Only Flag, and Include Deleted Images Flag that are provided as parameters.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GROUPS{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}1000{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter can either be provided as a single value or as an array.Each value found (either GROUPS or GROUPS(i)) will be evaluated by the Remote Procedure.Each value found must be the IEN in file #2005 or #2005.1 of a group of images.For each group specified, the Remote Procedure will find the study to whichthat group belongs, and then returna hierarchical list of all series and images in that study.{:/} | 
| {::nomarkdown}REQDFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter is Patient Number who owns the images.{:/} | 
| {::nomarkdown}IMGLESS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter is an indicator whether to get only Study-Level or include all images.Pass \1\ to get only Study-Level data.Pass null or empty string to include all images.{:/} | 
| {::nomarkdown}FLAGS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter is an indicator whether to include or exclude \Deleted\ Images.Pass \D\ to include Deleted Images.Pass null or empty string to exclude Deleted Images{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}