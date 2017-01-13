---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XWB CREATE CONTEXT 

 property | value 
--- | --- 
 label | {::nomarkdown}XWB CREATE CONTEXT{:/}
 tag | {::nomarkdown}CRCONTXT{:/}
 routine | [XWBSEC](http://code.osehra.org/dox/Routine_XWBSEC_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Establishes context on the server, which will be checked by the Broker beforeexecuting any other remote procedure.  Since context is nothing more than aclient/server \B\-type option in the OPTION file (#19), standard MenuMansecurity is applied in establishing a context.  Therefore, a context optioncan be granted to user(s) exactly the same way as regular options are doneusing MenuMan.A context can not be established for the following reasons:        The user has no access to that option        The option is temporarily out of orderAn application can switch from one context to another as often as it needs to.Each time a context is created the previous context is overwritten.For more information on creating a context and the overall Broker securitysee Broker on-line help documentation.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | creates context for the passed in option
 Input Parameters | {::nomarkdown}OPTION{:/}
 Lines | ```
 K XQY0,XQY N XWB1,XABPGMOD,XWBPGMOD S RESULT=0
 S OPTION=$$DECRYP^XUSRB1(OPTION) ;S:OPTION="" OPTION="\"
 I OPTION="" S XQY=0,XQY0="",RESULT=1 Q  ;delete context if "" passed in.
 S XWB1=$$OPTLK^XQCS(OPTION)
 I XWB1="" S (XWBSEC,RESULT)="The context '"_OPTION_"' does not exist on server." Q  ;P10
 S RESULT=$$CHK^XQCS(DUZ,XWB1)
 S XWBPGMOD=$$KCHK^XUSRB("XUPROGMODE")
 I RESULT!XWBPGMOD S XQY0=OPTION,XQY=XWB1,RESULT=1
 E  S XWBSEC=RESULT```




 Generated on January 13th 2017, 6:55:28 am