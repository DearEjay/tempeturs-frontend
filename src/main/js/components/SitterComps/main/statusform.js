import React from 'react';

export class StatusForm extends React.Component {

    render() {
        return (

          <div className="panel panel-default">
                <div className="panel-content">
                    <div className="panel-heading">
                        Update Status
                    </div>
                    <form  className="form center-block">
                        <input type="hidden" ref="imagepath" />
                        <div className="panel-body">
                            <div className="form-group">
                                <textarea ref="sharing" className="form-control input-lg"
                                          autofocus=""
                                          placeholder="What do you want to share?"></textarea>
                            </div>

                        </div>
                        <div className="panel-footer">
                            <div>
                                <ul className="pull-left list-inline">
                                    <li><input  ref="file" className='filepicker' id="file" type="file"/></li>
                                </ul>
                                <button type="submit" className="btn btn-primary btn-sm postbutton">Post</button>
                            </div>
                        </div>
                    </form>

                </div>
</div>
        );
    }
}
