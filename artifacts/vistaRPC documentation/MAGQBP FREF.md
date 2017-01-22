---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGQBP FREF 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGQBP FREF{:/}
 tag | {::nomarkdown}FILEREF{:/}
 routine | [MAGQBPRG](http://code.osehra.org/dox/Routine_MAGQBPRG_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}VALIDATES THAT THE FILEPATH IS CONSISTENT WITH VISTA MAGFILE REFERENCESET THE SECOND PIECE TO \PACS\ IF IT REPRESENTS DICOMVALIDATES THAT A JUKEBOX POINTER EXISTSRESULT VALUES{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILEPATH{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The computer name and directory path of the file.{:/} | 
| {::nomarkdown}FILENAME{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The filename.{:/} | 
| {::nomarkdown}FILE EXTENSION{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The file extension.{:/} | 
| {::nomarkdown}NETWORK LOCATION{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Current share network path being evaluated.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:57 am</p>{:/}