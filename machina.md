---
layout: page
title: Command
---
<div id="machina-config"
     data-machine-settings="{{ site.machine | jsonify | escape }}"
     data-github-settings="{{ site.github_settings | jsonify | escape }}"
     data-app-settings="{{ site.app | jsonify | escape }}"
     data-lm-settings="{{ site.lm | jsonify | escape }}"
     data-worker-url="{{ '/assets/js/' | append: site.app.worker_name | relative_url }}"
     style="display:none;">
</div>

<div id="commandPopupOverlay" class="popup-overlay" style="display: none;">
    <div class="popup">
        <h3>Enter the command (verb)</h3>
        <input type="text" id="commandPopupInput" placeholder="Use the verb describing the semantic action that needs to be taken...">
        <div style="margin-top: 10px;">
            <button id="commandPopupSaveButton" style="margin-right: 10px;">Use this command, go!</button>
            <button id="commandPopupCancelButton">Cancel</button>
        </div>
    </div>
</div>

<div id="loading-overlay" class="popup-overlay" style="display: none;">
    <div class="popup">
        <h5>{{ site.machine.name }} is thingking...</h5>
    </div>
</div>

<div id="dialogue-content-wrapper"></div>

<textarea id="dialogue-editor-textarea" class="form-control" style="display: none;"></textarea>

<div id="file-picker-container" style="display: none;">
  <button id="chooseFileButton" class="btn btn-primary">Choose File to Load Dialogue</button>
</div>

<script src="{{ '/assets/js/storage.js' | relative_url }}"></script>
