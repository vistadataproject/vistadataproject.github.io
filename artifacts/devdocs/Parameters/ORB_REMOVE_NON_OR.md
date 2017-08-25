---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; ORB REMOVE NON-OR<br/>
# ORB REMOVE NON-OR

Indicates if a non-CPRS (non-OERR) alert can be deleted withoutprocessing.  Enter the alert identifier (or a portion of the alertidentifier) for each type of alert you want to be able to remove in the CPRS GUI via the Remove button.  The alert identifier or XQAID can befound in the ALERT ID field of the ALERT file [#8992].  For this parameteruse the first few characters of the ALERT ID. For example, to remove NOISalerts enter FSC.  You may enter as many alert identifiers as desired.  Please note that most alert IDs include information specific to thepatient or instance which triggered the alert.  For this parameter youshould only enter that portion of the alert ID which is consistent for allalerts of this type.  For example, a NOIS alert&#x27;s ID might actually looklike FSC-M,275546.  Entering the entire alert ID in this parameter willonly allow removal of this specific alert.  However if the parameter valueis FSC, all NOIS alerts can be removed.  Other examples of non-OR alertIDs include:  NO-ID;17;3040628.131502   [Taskman alert] - use NO-ID in parameterTIUERR,3423,1;1450;3040518.125801   [TIU error alert] - use TIUERRTIU28907;17;3040720.134827   [TIU alert] - use TIU* in parameter  *Using TIU will also enable Removing TIUERR alerts.  Use TIUERR if youonly want to Remove TIUERR alerts.

## Properties

Property | Value
--- | ---
Summary | Remove Non-OR Alerts Without Processing
Value Type | yes
Value Domain | 
Multiple Instances | true

## Allowable Entities

Precedence | Entity
--- | ---
1 | SYSTEM

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:40 pm</p>{:/}