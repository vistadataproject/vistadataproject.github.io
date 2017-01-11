---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGQBP FREF 

 property | value 
--- | --- 
 label | MAGQBP FREF
 tag | FILEREF
 routine | [MAGQBPRG](http://code.osehra.org/dox/Routine_MAGQBPRG_source.html)
 return value type | SINGLE VALUE
 description | VALIDATES THAT THE FILEPATH IS CONSISTENT WITH VISTA MAGFILE REFERENCESET THE SECOND PIECE TO \PACS\ IF IT REPRESENTS DICOMVALIDATES THAT A JUKEBOX POINTER EXISTSRESULT VALUES

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FILEPATH | LITERAL |  | true | The computer name and directory path of the file. | 
| FILENAME | LITERAL |  | true | The filename. | 
| FILE EXTENSION | LITERAL |  | true | The file extension. | 
| NETWORK LOCATION | LITERAL |  | true | Current share network path being evaluated. | 




 ###### Generated on January 11th 2017, 6:39:43 am