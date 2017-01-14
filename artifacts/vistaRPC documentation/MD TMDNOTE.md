---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MD TMDNOTE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MD TMDNOTE{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [MDRPCNT](http://code.osehra.org/dox/Routine_MDRPCNT_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This remote procedure call does the following:Accepts the following Inputs:   RESULTS - Both (Input and Output) - Passed in as the array to return             results in.    OPTION - NEWDOC = Add additional new document to the Hemodialysis                     study.             NOTELIST = Returns a list of documents associated with the                      study.  The pieces returned are: Note IEN, Note                      title, Date/Time Creation, Author, and Hospital                      Location.             VIEWTIU = Return the text lines of a document from NOTELST.    MDSID - Study internal Entry Number.    MDTIU - TIU Document Internal Entry Number.    MDDTE - Date/Time of Document Creation.    MDAUTH - Author of document.    MDESIG - Encrypted Electronic Signature.    MDTXT - Text of the new document in an array.  Return Results are the following: OPTION = NEWDOC > D RPC^MDRPCNT(.RESULTS,\NEWDOC\,904,\\,3050524.0915,679,74RHLld;flk,MDTXT) > D ^%G Global ^TMP(\MDKUTL\,$J        TMP(\MDKUTL\,$J^TMP(\MDKUTL\,538992716,0) = Note internal entry number   or -1^Error Message  OPTION  = NOTELIST         > D RPC^MDRPCNT(.RESULTS,\NOTELST\,476) > D ^%G Global ^TMP(\MDKUTL\,$J        TMP(\MDKUTL\,$J^TMP(\MDKUTL\,538992716,1) = 968^PROCEDURE NOTE^OCT 10, 2001@17:08:36^MDPROVIDER,ONE ^PROSTHETICS^TMP(\MDKUTL\,538992716,2) = 969^PROCEDURE NOTE^OCT 10, 2001@17:10:44^^PROSTHETICS^TMP(\MDKUTL\,538992716,3) = 970^PROCEDURE NOTE^OCT 10, 2001@17:11:50^^PROSTHETICS^TMP(\MDKUTL\,538992716,4) = 971^PROCEDURE NOTE^OCT 10, 2001@17:15:45^^PROSTHETICS^TMP(\MDKUTL\,538992716,5) = 972^PROCEDURE NOTE^OCT 10, 2001@17:16:34^^PROSTHETICS^TMP(\MDKUTL\,538992716,6) = 974^PROCEDURE NOTE^OCT 11, 2001@10:56:03^^PROSTHETICS^TMP(\MDKUTL\,538992716,7) = 975^PROCEDURE NOTE^OCT 11, 2001@12:50:29^^PROSTHETICSGlobal ^ OPTION = VIEWTIU                  > D RPC^MDRPCNT(.RESULTS,\VIEWTIU\,476,968) > D ^%G Global ^TMP(\TIUVIEW\,$J        TMP(\TIUVIEW\,$J^TMP(\TIUVIEW\,538992716,1) =        TITLE: PROCEDURE NOTE                                           ^TMP(\TIUVIEW\,538992716,2) = DATE OF NOTE: OCT 10, 2001@17:08:36  ENTRY DATE: OCT 10, 2001@17:08:36      ^TMP(\TIUVIEW\,538992716,3) =       AUTHOR: MDPROVIDER,ONE   EXP COSIGNER:                         ^TMP(\TIUVIEW\,538992716,4) =      URGENCY:                            STATUS: COMPLETED                     ^TMP(\TIUVIEW\,538992716,5) = ^TMP(\TIUVIEW\,538992716,6) = PROCEDURE SUMMARY CODE: Abnormal                      ^TMP(\TIUVIEW\,538992716,7) = DATE/TIME PERFORMED: OCT 15, 2001        ^TMP(\TIUVIEW\,538992716,8) = ^TMP(\TIUVIEW\,538992716,9) =    *** PROCEDURE NOTE Has ADDENDA ***^TMP(\TIUVIEW\,538992716,10) = ^TMP(\TIUVIEW\,538992716,11) = Complete consult 1104. 6 attached images. ^TMP(\TIUVIEW\,538992716,12) =  ^TMP(\TIUVIEW\,538992716,13) = /es/ MDPROVIDER,ONE^TMP(\TIUVIEW\,538992716,14) = ^TMP(\TIUVIEW\,538992716,15) = Signed: 10/15/2001 13:02^TMP(\TIUVIEW\,538992716,16) = ^TMP(\TIUVIEW\,538992716,17) = 10/15/2001 ADDENDUM                      STATUS: COMPLETED^TMP(\TIUVIEW\,538992716,18) = aDDENDUM LA LA LA ^TMP(\TIUVIEW\,538992716,19) = LA LA LA^TMP(\TIUVIEW\,538992716,20) =  ^TMP(\TIUVIEW\,538992716,21) = /es/ MDPROVIDER,ONE^TMP(\TIUVIEW\,538992716,22) = ^TMP(\TIUVIEW\,538992716,23) = Signed: 10/15/2001 13:04{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}