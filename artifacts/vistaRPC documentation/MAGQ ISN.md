---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGQ ISN 

 property | value 
--- | --- 
 label | MAGQ ISN
 tag | ISN
 routine | [MAGUSIT](http://code.osehra.org/dox/Routine_MAGUSIT_source.html)
 return value type | SINGLE VALUE
 description | This is the mail message component of the \ImageGroupNotify\ method.This report is sent to the MAG SERVER mail group in order to alertmembers of the occurance of image file size variance.  This is indicativeof a network and Clinical imaging event requiring action to correct theclinical database.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FILENAME | LITERAL | 8 | true | This is the filename and extension which has file size variance. | 
| Network source file size. | LITERAL | 1 | true | This is the bite integer which represents the size property. | 
| Jukebox size | LITERAL | 1 | true | This is the Jukebox file size integer property. | 




Generated on January 11th 2017, 6:34:23 am