---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGGLAB FILE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGGLAB FILE{:/}
 tag | {::nomarkdown}FILE{:/}
 routine | [MAGGTLB1](http://code.osehra.org/dox/Routine_MAGGTLB1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Files the Lab pointer in Image File, ^MAG(2005, and files the imagepointer in the Lab file. ^LR(LRDFN,LRSECT{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IMIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}IMIEN - ^MAG(2005,IMIEN image captured.{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown};DATA - stain^micro obj^Pt name^ssn^date/time^acc#^Pathologist^specimendesc.^lab section^dfn^lrdfn^lri^spec ien^field#^global root e.g. ^LR(1,\SP\,7069 758,.1,1   ;DATA is the result of START^MAGGTLB (the specimen variable during the   ;image capture window).   ;Will return a single value on filing success.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:44 pm</p>{:/}