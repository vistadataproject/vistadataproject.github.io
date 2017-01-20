---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG FIND IMAGE TEXT FILE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG FIND IMAGE TEXT FILE{:/}
 tag | {::nomarkdown}FINDFIL{:/}
 routine | [MAGDOD01](http://code.osehra.org/dox/Routine_MAGDOD01_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}  +---------------------------------------------------------------+   Property of the US Government.                                   No permission to copy or redistribute this software is given.    Use of unreleased versions of this software requires the user    to execute a written test agreement with the VistA Imaging       Development Office of the Department of Veterans Affairs,        telephone (301) 734-0100.                                                                                                         The Food and Drug Administration classifies this software as     a medical device.  As such, it may not be changed in any way.    Modifications to this software may result in an adulterated      medical device under 21CFR820, the use of which is considered    to be a violation of US Federal Statutes.                       +---------------------------------------------------------------+ This Remote Procedure allows the invoking client to use a filename (without extension) to find the path and nearest location of an image file.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILENAME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}199{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is the name of an image file, without path or extension.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}