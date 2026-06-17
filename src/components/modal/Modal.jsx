import {  Modal } from "antd";

const CustomModal = ({  setModalOPen,modalOpen }) => {
	return (
		<>
			<Modal
				title="Email Verification"
				centered
                  visible={modalOpen}
				footer={null}
				onCancel={()=>setModalOPen(false)}
			>
				<div className="_fieldGroup_1g3ja_1">
					<input
						id="code"
						className="_textField_fwd9c_1"
						name="code"
						placeholder="enter verification code"
						required=""
						data-testid="code"
						style={{
							borderRadius: "50px",
							width: "500px",
							padding: "15px",
							border: "1px solid #ccc",
							outline: "none",
							transition: "box-shadow 0.3s ease-in-out",
							boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
							fontFamily: "Arial, sans-serif",
							fontSize: "16px",
							lineHeight: "1.5",
							color: "#333",
							backgroundColor: "#fff",
						}}
					/>
				</div>
			</Modal>
		</>
	);
};
export default CustomModal;
