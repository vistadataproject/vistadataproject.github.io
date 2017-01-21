---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; YTQ QUESTALL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}YTQ QUESTALL{:/}
 tag | {::nomarkdown}QUESTALL{:/}
 routine | [YTQAPI3](http://code.osehra.org/dox/Routine_YTQAPI3_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Retuns Item text, Intro, Choicetypes and Display information for all Questions in a Specified Instrument. Input: YS(\CODE\):As test name Output: YSDATA(1)=[DATA] or [ERROR]        YSDATA(2)=\NUMBER OF QUESTIONS=\_N3        YSDATA(3)=QUESTION NUMBER1=ien for MH Question^QUESTION                   SEQUENCE^DESIGNATOR         YSDATA(4)=QUESTION TEXT1=fIRST line of text        YSDATA(5)=additional text lines as needed        YSDATA(6)=INTRO TEXT1=IEN FOR MH INTRO^First intro line        YSDATA(7)=additional intro lines as needed        YSDATA(8)=DESC1=Respone Type^CHOICETYPE^MIN^MAX^IS REQUIRED                ^HINT^CHOICEIDENTIFIER         YSDATA(9)=QDISPLAY1=DisplayId^FontName^FontBold^FontItalic                  ^FontUnderlined ^ Fontsize^FontColor ^Alignment                  ^left^Mask^Colums^Component (for question text)        YSDATA(10)=IDISPLAY1=DisplayId^FontName^FontBold^FontItalic                  ^FontUnderlined ^Fontsize^FontColor^Alignment                  ^left^Mask^Colums^Component (for intro text)        YSDATA(11)=CDISPLAY1=DisplayId^FontName^FontBold^FontItalic                   ^FontUnderlined ^Fontsize^FontColor^Alignment                   ^left^Mask^Colums^Component (for choice)        :        Repeat for each item in test{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:53 am</p>{:/}