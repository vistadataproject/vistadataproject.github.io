---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DENTV NEW EXTRACT
# DENTV NEW EXTRACT

This RPC queues off the Dental Extract at a user designated time.  Upon completion of the extract, a TCP/IP client will be called from the tasked job to send the data to a text file.

Property | Value
--- | ---
Label | Q
Routine | [DENTVRP8](http://code.osehra.org/dox/Routine_DENTVRP8_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LIST | 30 | true | This is the input array for queuing the Dental Extract.  The following input format is required:    DATA(&quot;STARTDT&quot;)&#x3D;Start Date MM/DD/YYYY    DATA(&quot;ENDDT&quot;)&#x3D;End Date MM/DD/YYYY    DATA(&quot;RUNDTTM&quot;)&#x3D;Run Date/Time (task date) MM/DD/YYYY@HH:MM:SS    DATA(&quot;FILE&quot;)&#x3D;folder/file location, e.g. C:\Temp\Extract.txt    DATA(&quot;IPADX&quot;)&#x3D;IP address    DATA(&quot;PORT&quot;)&#x3D;Port#    DATA(&quot;PROVIEN&quot;)&#x3D;optional Provider IENs p1^p2^p3, etc    DATA(&quot;FORMAT&quot;)&#x3D;0 for excel, 1 for access    DATA(&quot;TXNS&quot;)&#x3D;optional CPFO or any combination of transaction statuses                     (compl/plan/find/obs)    DATA(&quot;STN&quot;)&#x3D;optional facility



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}