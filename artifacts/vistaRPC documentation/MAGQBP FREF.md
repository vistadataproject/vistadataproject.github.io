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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FILEPATH | LITERAL |  | true | The computer name and directory path of the file. | 
| vs:Input_Parameter-8994_02 | FILENAME | LITERAL |  | true | The filename. | 
| vs:Input_Parameter-8994_02 | FILE EXTENSION | LITERAL |  | true | The file extension. | 
| vs:Input_Parameter-8994_02 | NETWORK LOCATION | LITERAL |  | true | Current share network path being evaluated. | 