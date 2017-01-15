---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGQ ISN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGQ ISN{:/}
 tag | {::nomarkdown}ISN{:/}
 routine | [MAGUSIT](http://code.osehra.org/dox/Routine_MAGUSIT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This is the mail message component of the \ImageGroupNotify\ method.This report is sent to the MAG SERVER mail group in order to alertmembers of the occurance of image file size variance.  This is indicativeof a network and Clinical imaging event requiring action to correct theclinical database.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILENAME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}8{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the filename and extension which has file size variance.{:/} | 
| {::nomarkdown}Network source file size.{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the bite integer which represents the size property.{:/} | 
| {::nomarkdown}Jukebox size{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the Jukebox file size integer property.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}