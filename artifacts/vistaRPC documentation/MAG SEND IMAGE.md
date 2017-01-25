---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG SEND IMAGE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG SEND IMAGE{:/}
 tag | {::nomarkdown}MAGSEND{:/}
 routine | [MAGROI01](http://code.osehra.org/dox/Routine_MAGROI01_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}QUEUE IMAGE TO A DESTINATION{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}IEN of the image to send{:/} | 
| {::nomarkdown}QREC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Record number of the destination queue (DOS/DICOM){:/} | 
| {::nomarkdown}PRI{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}4{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Priority{:/} | 
| {::nomarkdown}TYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Type of Image: 1:DOS, 2:DICOM{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}