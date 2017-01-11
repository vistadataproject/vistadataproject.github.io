---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGGLAB FILE 

 property | value 
--- | --- 
 label | MAGGLAB FILE
 tag | FILE
 routine | [MAGGTLB1](http://code.osehra.org/dox/Routine_MAGGTLB1_source.html)
 return value type | SINGLE VALUE
 description | Files the Lab pointer in Image File, ^MAG(2005, and files the imagepointer in the Lab file. ^LR(LRDFN,LRSECT

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IMIEN | LITERAL | 30 | true | IMIEN - ^MAG(2005,IMIEN image captured. | 
| DATA | LITERAL | 245 | true | ;DATA - stain^micro obj^Pt name^ssn^date/time^acc#^Pathologist^specimendesc.^lab section^dfn^lrdfn^lri^spec ien^field#^global root e.g. ^LR(1,\SP\,7069 758,.1,1   ;DATA is the result of START^MAGGTLB (the specimen variable during the   ;image capture window).   ;Will return a single value on filing success. | 